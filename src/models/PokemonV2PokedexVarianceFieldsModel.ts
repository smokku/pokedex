import { Instance } from "mobx-state-tree"
import { PokemonV2PokedexVarianceFieldsModelBase } from "./PokemonV2PokedexVarianceFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PokedexVarianceFieldsModel */
export interface PokemonV2PokedexVarianceFieldsModelType extends Instance<typeof PokemonV2PokedexVarianceFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokedexVarianceFieldsModel */
export { selectFromPokemonV2PokedexVarianceFields, pokemonV2PokedexVarianceFieldsModelPrimitives, PokemonV2PokedexVarianceFieldsModelSelector } from "./PokemonV2PokedexVarianceFieldsModel.base"

/**
 * PokemonV2PokedexVarianceFieldsModel
 *
 * aggregate variance on columns
 */
export const PokemonV2PokedexVarianceFieldsModel = PokemonV2PokedexVarianceFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
