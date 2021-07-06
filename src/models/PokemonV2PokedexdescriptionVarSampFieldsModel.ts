import { Instance } from "mobx-state-tree"
import { PokemonV2PokedexdescriptionVarSampFieldsModelBase } from "./PokemonV2PokedexdescriptionVarSampFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PokedexdescriptionVarSampFieldsModel */
export interface PokemonV2PokedexdescriptionVarSampFieldsModelType extends Instance<typeof PokemonV2PokedexdescriptionVarSampFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokedexdescriptionVarSampFieldsModel */
export { selectFromPokemonV2PokedexdescriptionVarSampFields, pokemonV2PokedexdescriptionVarSampFieldsModelPrimitives, PokemonV2PokedexdescriptionVarSampFieldsModelSelector } from "./PokemonV2PokedexdescriptionVarSampFieldsModel.base"

/**
 * PokemonV2PokedexdescriptionVarSampFieldsModel
 *
 * aggregate var_samp on columns
 */
export const PokemonV2PokedexdescriptionVarSampFieldsModel = PokemonV2PokedexdescriptionVarSampFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
