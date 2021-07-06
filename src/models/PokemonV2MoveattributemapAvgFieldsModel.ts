import { Instance } from "mobx-state-tree"
import { PokemonV2MoveattributemapAvgFieldsModelBase } from "./PokemonV2MoveattributemapAvgFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2MoveattributemapAvgFieldsModel */
export interface PokemonV2MoveattributemapAvgFieldsModelType extends Instance<typeof PokemonV2MoveattributemapAvgFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2MoveattributemapAvgFieldsModel */
export { selectFromPokemonV2MoveattributemapAvgFields, pokemonV2MoveattributemapAvgFieldsModelPrimitives, PokemonV2MoveattributemapAvgFieldsModelSelector } from "./PokemonV2MoveattributemapAvgFieldsModel.base"

/**
 * PokemonV2MoveattributemapAvgFieldsModel
 *
 * aggregate avg on columns
 */
export const PokemonV2MoveattributemapAvgFieldsModel = PokemonV2MoveattributemapAvgFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
