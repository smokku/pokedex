import { Instance } from "mobx-state-tree"
import { PokemonV2PokemonitemVarianceFieldsModelBase } from "./PokemonV2PokemonitemVarianceFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PokemonitemVarianceFieldsModel */
export interface PokemonV2PokemonitemVarianceFieldsModelType extends Instance<typeof PokemonV2PokemonitemVarianceFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokemonitemVarianceFieldsModel */
export { selectFromPokemonV2PokemonitemVarianceFields, pokemonV2PokemonitemVarianceFieldsModelPrimitives, PokemonV2PokemonitemVarianceFieldsModelSelector } from "./PokemonV2PokemonitemVarianceFieldsModel.base"

/**
 * PokemonV2PokemonitemVarianceFieldsModel
 *
 * aggregate variance on columns
 */
export const PokemonV2PokemonitemVarianceFieldsModel = PokemonV2PokemonitemVarianceFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
