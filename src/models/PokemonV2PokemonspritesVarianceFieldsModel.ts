import { Instance } from "mobx-state-tree"
import { PokemonV2PokemonspritesVarianceFieldsModelBase } from "./PokemonV2PokemonspritesVarianceFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PokemonspritesVarianceFieldsModel */
export interface PokemonV2PokemonspritesVarianceFieldsModelType extends Instance<typeof PokemonV2PokemonspritesVarianceFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokemonspritesVarianceFieldsModel */
export { selectFromPokemonV2PokemonspritesVarianceFields, pokemonV2PokemonspritesVarianceFieldsModelPrimitives, PokemonV2PokemonspritesVarianceFieldsModelSelector } from "./PokemonV2PokemonspritesVarianceFieldsModel.base"

/**
 * PokemonV2PokemonspritesVarianceFieldsModel
 *
 * aggregate variance on columns
 */
export const PokemonV2PokemonspritesVarianceFieldsModel = PokemonV2PokemonspritesVarianceFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
