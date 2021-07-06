import { Instance } from "mobx-state-tree"
import { PokemonV2MoveattributemapSumFieldsModelBase } from "./PokemonV2MoveattributemapSumFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2MoveattributemapSumFieldsModel */
export interface PokemonV2MoveattributemapSumFieldsModelType extends Instance<typeof PokemonV2MoveattributemapSumFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2MoveattributemapSumFieldsModel */
export { selectFromPokemonV2MoveattributemapSumFields, pokemonV2MoveattributemapSumFieldsModelPrimitives, PokemonV2MoveattributemapSumFieldsModelSelector } from "./PokemonV2MoveattributemapSumFieldsModel.base"

/**
 * PokemonV2MoveattributemapSumFieldsModel
 *
 * aggregate sum on columns
 */
export const PokemonV2MoveattributemapSumFieldsModel = PokemonV2MoveattributemapSumFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
