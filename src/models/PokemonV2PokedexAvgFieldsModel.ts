import { Instance } from "mobx-state-tree"
import { PokemonV2PokedexAvgFieldsModelBase } from "./PokemonV2PokedexAvgFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PokedexAvgFieldsModel */
export interface PokemonV2PokedexAvgFieldsModelType extends Instance<typeof PokemonV2PokedexAvgFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokedexAvgFieldsModel */
export { selectFromPokemonV2PokedexAvgFields, pokemonV2PokedexAvgFieldsModelPrimitives, PokemonV2PokedexAvgFieldsModelSelector } from "./PokemonV2PokedexAvgFieldsModel.base"

/**
 * PokemonV2PokedexAvgFieldsModel
 *
 * aggregate avg on columns
 */
export const PokemonV2PokedexAvgFieldsModel = PokemonV2PokedexAvgFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
