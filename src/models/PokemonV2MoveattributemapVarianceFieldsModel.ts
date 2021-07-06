import { Instance } from "mobx-state-tree"
import { PokemonV2MoveattributemapVarianceFieldsModelBase } from "./PokemonV2MoveattributemapVarianceFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2MoveattributemapVarianceFieldsModel */
export interface PokemonV2MoveattributemapVarianceFieldsModelType extends Instance<typeof PokemonV2MoveattributemapVarianceFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2MoveattributemapVarianceFieldsModel */
export { selectFromPokemonV2MoveattributemapVarianceFields, pokemonV2MoveattributemapVarianceFieldsModelPrimitives, PokemonV2MoveattributemapVarianceFieldsModelSelector } from "./PokemonV2MoveattributemapVarianceFieldsModel.base"

/**
 * PokemonV2MoveattributemapVarianceFieldsModel
 *
 * aggregate variance on columns
 */
export const PokemonV2MoveattributemapVarianceFieldsModel = PokemonV2MoveattributemapVarianceFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
