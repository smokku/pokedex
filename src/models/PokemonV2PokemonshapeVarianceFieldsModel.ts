import { Instance } from "mobx-state-tree"
import { PokemonV2PokemonshapeVarianceFieldsModelBase } from "./PokemonV2PokemonshapeVarianceFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PokemonshapeVarianceFieldsModel */
export interface PokemonV2PokemonshapeVarianceFieldsModelType extends Instance<typeof PokemonV2PokemonshapeVarianceFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokemonshapeVarianceFieldsModel */
export { selectFromPokemonV2PokemonshapeVarianceFields, pokemonV2PokemonshapeVarianceFieldsModelPrimitives, PokemonV2PokemonshapeVarianceFieldsModelSelector } from "./PokemonV2PokemonshapeVarianceFieldsModel.base"

/**
 * PokemonV2PokemonshapeVarianceFieldsModel
 *
 * aggregate variance on columns
 */
export const PokemonV2PokemonshapeVarianceFieldsModel = PokemonV2PokemonshapeVarianceFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
