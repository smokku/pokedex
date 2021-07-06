import { Instance } from "mobx-state-tree"
import { PokemonV2PokedexdescriptionAvgFieldsModelBase } from "./PokemonV2PokedexdescriptionAvgFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PokedexdescriptionAvgFieldsModel */
export interface PokemonV2PokedexdescriptionAvgFieldsModelType extends Instance<typeof PokemonV2PokedexdescriptionAvgFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokedexdescriptionAvgFieldsModel */
export { selectFromPokemonV2PokedexdescriptionAvgFields, pokemonV2PokedexdescriptionAvgFieldsModelPrimitives, PokemonV2PokedexdescriptionAvgFieldsModelSelector } from "./PokemonV2PokedexdescriptionAvgFieldsModel.base"

/**
 * PokemonV2PokedexdescriptionAvgFieldsModel
 *
 * aggregate avg on columns
 */
export const PokemonV2PokedexdescriptionAvgFieldsModel = PokemonV2PokedexdescriptionAvgFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
