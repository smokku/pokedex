import { Instance } from "mobx-state-tree"
import { PokemonV2PokemonspritesStddevPopFieldsModelBase } from "./PokemonV2PokemonspritesStddevPopFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PokemonspritesStddevPopFieldsModel */
export interface PokemonV2PokemonspritesStddevPopFieldsModelType extends Instance<typeof PokemonV2PokemonspritesStddevPopFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokemonspritesStddevPopFieldsModel */
export { selectFromPokemonV2PokemonspritesStddevPopFields, pokemonV2PokemonspritesStddevPopFieldsModelPrimitives, PokemonV2PokemonspritesStddevPopFieldsModelSelector } from "./PokemonV2PokemonspritesStddevPopFieldsModel.base"

/**
 * PokemonV2PokemonspritesStddevPopFieldsModel
 *
 * aggregate stddev_pop on columns
 */
export const PokemonV2PokemonspritesStddevPopFieldsModel = PokemonV2PokemonspritesStddevPopFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
