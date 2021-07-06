import { Instance } from "mobx-state-tree"
import { PokemonV2PokedexnameStddevPopFieldsModelBase } from "./PokemonV2PokedexnameStddevPopFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PokedexnameStddevPopFieldsModel */
export interface PokemonV2PokedexnameStddevPopFieldsModelType extends Instance<typeof PokemonV2PokedexnameStddevPopFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokedexnameStddevPopFieldsModel */
export { selectFromPokemonV2PokedexnameStddevPopFields, pokemonV2PokedexnameStddevPopFieldsModelPrimitives, PokemonV2PokedexnameStddevPopFieldsModelSelector } from "./PokemonV2PokedexnameStddevPopFieldsModel.base"

/**
 * PokemonV2PokedexnameStddevPopFieldsModel
 *
 * aggregate stddev_pop on columns
 */
export const PokemonV2PokedexnameStddevPopFieldsModel = PokemonV2PokedexnameStddevPopFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
