import { Instance } from "mobx-state-tree"
import { PokemonV2PokemonformspritesVarianceFieldsModelBase } from "./PokemonV2PokemonformspritesVarianceFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PokemonformspritesVarianceFieldsModel */
export interface PokemonV2PokemonformspritesVarianceFieldsModelType extends Instance<typeof PokemonV2PokemonformspritesVarianceFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokemonformspritesVarianceFieldsModel */
export { selectFromPokemonV2PokemonformspritesVarianceFields, pokemonV2PokemonformspritesVarianceFieldsModelPrimitives, PokemonV2PokemonformspritesVarianceFieldsModelSelector } from "./PokemonV2PokemonformspritesVarianceFieldsModel.base"

/**
 * PokemonV2PokemonformspritesVarianceFieldsModel
 *
 * aggregate variance on columns
 */
export const PokemonV2PokemonformspritesVarianceFieldsModel = PokemonV2PokemonformspritesVarianceFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
