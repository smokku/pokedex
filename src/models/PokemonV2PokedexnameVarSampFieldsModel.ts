import { Instance } from "mobx-state-tree"
import { PokemonV2PokedexnameVarSampFieldsModelBase } from "./PokemonV2PokedexnameVarSampFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PokedexnameVarSampFieldsModel */
export interface PokemonV2PokedexnameVarSampFieldsModelType extends Instance<typeof PokemonV2PokedexnameVarSampFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokedexnameVarSampFieldsModel */
export { selectFromPokemonV2PokedexnameVarSampFields, pokemonV2PokedexnameVarSampFieldsModelPrimitives, PokemonV2PokedexnameVarSampFieldsModelSelector } from "./PokemonV2PokedexnameVarSampFieldsModel.base"

/**
 * PokemonV2PokedexnameVarSampFieldsModel
 *
 * aggregate var_samp on columns
 */
export const PokemonV2PokedexnameVarSampFieldsModel = PokemonV2PokedexnameVarSampFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
