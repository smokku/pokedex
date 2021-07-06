import { Instance } from "mobx-state-tree"
import { PokemonV2PokemoncolorVarianceFieldsModelBase } from "./PokemonV2PokemoncolorVarianceFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PokemoncolorVarianceFieldsModel */
export interface PokemonV2PokemoncolorVarianceFieldsModelType extends Instance<typeof PokemonV2PokemoncolorVarianceFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokemoncolorVarianceFieldsModel */
export { selectFromPokemonV2PokemoncolorVarianceFields, pokemonV2PokemoncolorVarianceFieldsModelPrimitives, PokemonV2PokemoncolorVarianceFieldsModelSelector } from "./PokemonV2PokemoncolorVarianceFieldsModel.base"

/**
 * PokemonV2PokemoncolorVarianceFieldsModel
 *
 * aggregate variance on columns
 */
export const PokemonV2PokemoncolorVarianceFieldsModel = PokemonV2PokemoncolorVarianceFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
