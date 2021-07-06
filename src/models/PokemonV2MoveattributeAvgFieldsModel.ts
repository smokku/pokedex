import { Instance } from "mobx-state-tree"
import { PokemonV2MoveattributeAvgFieldsModelBase } from "./PokemonV2MoveattributeAvgFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2MoveattributeAvgFieldsModel */
export interface PokemonV2MoveattributeAvgFieldsModelType extends Instance<typeof PokemonV2MoveattributeAvgFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2MoveattributeAvgFieldsModel */
export { selectFromPokemonV2MoveattributeAvgFields, pokemonV2MoveattributeAvgFieldsModelPrimitives, PokemonV2MoveattributeAvgFieldsModelSelector } from "./PokemonV2MoveattributeAvgFieldsModel.base"

/**
 * PokemonV2MoveattributeAvgFieldsModel
 *
 * aggregate avg on columns
 */
export const PokemonV2MoveattributeAvgFieldsModel = PokemonV2MoveattributeAvgFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
