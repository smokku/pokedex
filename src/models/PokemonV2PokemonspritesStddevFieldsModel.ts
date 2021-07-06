import { Instance } from "mobx-state-tree"
import { PokemonV2PokemonspritesStddevFieldsModelBase } from "./PokemonV2PokemonspritesStddevFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PokemonspritesStddevFieldsModel */
export interface PokemonV2PokemonspritesStddevFieldsModelType extends Instance<typeof PokemonV2PokemonspritesStddevFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokemonspritesStddevFieldsModel */
export { selectFromPokemonV2PokemonspritesStddevFields, pokemonV2PokemonspritesStddevFieldsModelPrimitives, PokemonV2PokemonspritesStddevFieldsModelSelector } from "./PokemonV2PokemonspritesStddevFieldsModel.base"

/**
 * PokemonV2PokemonspritesStddevFieldsModel
 *
 * aggregate stddev on columns
 */
export const PokemonV2PokemonspritesStddevFieldsModel = PokemonV2PokemonspritesStddevFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
