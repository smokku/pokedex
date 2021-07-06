import { Instance } from "mobx-state-tree"
import { PokemonV2PokedexnameStddevFieldsModelBase } from "./PokemonV2PokedexnameStddevFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PokedexnameStddevFieldsModel */
export interface PokemonV2PokedexnameStddevFieldsModelType extends Instance<typeof PokemonV2PokedexnameStddevFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokedexnameStddevFieldsModel */
export { selectFromPokemonV2PokedexnameStddevFields, pokemonV2PokedexnameStddevFieldsModelPrimitives, PokemonV2PokedexnameStddevFieldsModelSelector } from "./PokemonV2PokedexnameStddevFieldsModel.base"

/**
 * PokemonV2PokedexnameStddevFieldsModel
 *
 * aggregate stddev on columns
 */
export const PokemonV2PokedexnameStddevFieldsModel = PokemonV2PokedexnameStddevFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
