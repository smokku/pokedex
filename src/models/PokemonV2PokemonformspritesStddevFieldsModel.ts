import { Instance } from "mobx-state-tree"
import { PokemonV2PokemonformspritesStddevFieldsModelBase } from "./PokemonV2PokemonformspritesStddevFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PokemonformspritesStddevFieldsModel */
export interface PokemonV2PokemonformspritesStddevFieldsModelType extends Instance<typeof PokemonV2PokemonformspritesStddevFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokemonformspritesStddevFieldsModel */
export { selectFromPokemonV2PokemonformspritesStddevFields, pokemonV2PokemonformspritesStddevFieldsModelPrimitives, PokemonV2PokemonformspritesStddevFieldsModelSelector } from "./PokemonV2PokemonformspritesStddevFieldsModel.base"

/**
 * PokemonV2PokemonformspritesStddevFieldsModel
 *
 * aggregate stddev on columns
 */
export const PokemonV2PokemonformspritesStddevFieldsModel = PokemonV2PokemonformspritesStddevFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
