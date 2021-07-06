import { Instance } from "mobx-state-tree"
import { PokemonV2PokemonmoveVarianceFieldsModelBase } from "./PokemonV2PokemonmoveVarianceFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PokemonmoveVarianceFieldsModel */
export interface PokemonV2PokemonmoveVarianceFieldsModelType extends Instance<typeof PokemonV2PokemonmoveVarianceFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokemonmoveVarianceFieldsModel */
export { selectFromPokemonV2PokemonmoveVarianceFields, pokemonV2PokemonmoveVarianceFieldsModelPrimitives, PokemonV2PokemonmoveVarianceFieldsModelSelector } from "./PokemonV2PokemonmoveVarianceFieldsModel.base"

/**
 * PokemonV2PokemonmoveVarianceFieldsModel
 *
 * aggregate variance on columns
 */
export const PokemonV2PokemonmoveVarianceFieldsModel = PokemonV2PokemonmoveVarianceFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
