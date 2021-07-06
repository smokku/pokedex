import { Instance } from "mobx-state-tree"
import { PokemonV2PokedexdescriptionMinFieldsModelBase } from "./PokemonV2PokedexdescriptionMinFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PokedexdescriptionMinFieldsModel */
export interface PokemonV2PokedexdescriptionMinFieldsModelType extends Instance<typeof PokemonV2PokedexdescriptionMinFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokedexdescriptionMinFieldsModel */
export { selectFromPokemonV2PokedexdescriptionMinFields, pokemonV2PokedexdescriptionMinFieldsModelPrimitives, PokemonV2PokedexdescriptionMinFieldsModelSelector } from "./PokemonV2PokedexdescriptionMinFieldsModel.base"

/**
 * PokemonV2PokedexdescriptionMinFieldsModel
 *
 * aggregate min on columns
 */
export const PokemonV2PokedexdescriptionMinFieldsModel = PokemonV2PokedexdescriptionMinFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
