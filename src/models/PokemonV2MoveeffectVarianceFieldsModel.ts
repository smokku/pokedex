import { Instance } from "mobx-state-tree"
import { PokemonV2MoveeffectVarianceFieldsModelBase } from "./PokemonV2MoveeffectVarianceFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2MoveeffectVarianceFieldsModel */
export interface PokemonV2MoveeffectVarianceFieldsModelType extends Instance<typeof PokemonV2MoveeffectVarianceFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2MoveeffectVarianceFieldsModel */
export { selectFromPokemonV2MoveeffectVarianceFields, pokemonV2MoveeffectVarianceFieldsModelPrimitives, PokemonV2MoveeffectVarianceFieldsModelSelector } from "./PokemonV2MoveeffectVarianceFieldsModel.base"

/**
 * PokemonV2MoveeffectVarianceFieldsModel
 *
 * aggregate variance on columns
 */
export const PokemonV2MoveeffectVarianceFieldsModel = PokemonV2MoveeffectVarianceFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
