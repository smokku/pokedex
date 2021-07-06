import { Instance } from "mobx-state-tree"
import { PokemonV2MoveattributenameAvgFieldsModelBase } from "./PokemonV2MoveattributenameAvgFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2MoveattributenameAvgFieldsModel */
export interface PokemonV2MoveattributenameAvgFieldsModelType extends Instance<typeof PokemonV2MoveattributenameAvgFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2MoveattributenameAvgFieldsModel */
export { selectFromPokemonV2MoveattributenameAvgFields, pokemonV2MoveattributenameAvgFieldsModelPrimitives, PokemonV2MoveattributenameAvgFieldsModelSelector } from "./PokemonV2MoveattributenameAvgFieldsModel.base"

/**
 * PokemonV2MoveattributenameAvgFieldsModel
 *
 * aggregate avg on columns
 */
export const PokemonV2MoveattributenameAvgFieldsModel = PokemonV2MoveattributenameAvgFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
