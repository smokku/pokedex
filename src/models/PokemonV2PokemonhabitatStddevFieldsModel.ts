import { Instance } from "mobx-state-tree"
import { PokemonV2PokemonhabitatStddevFieldsModelBase } from "./PokemonV2PokemonhabitatStddevFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PokemonhabitatStddevFieldsModel */
export interface PokemonV2PokemonhabitatStddevFieldsModelType extends Instance<typeof PokemonV2PokemonhabitatStddevFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokemonhabitatStddevFieldsModel */
export { selectFromPokemonV2PokemonhabitatStddevFields, pokemonV2PokemonhabitatStddevFieldsModelPrimitives, PokemonV2PokemonhabitatStddevFieldsModelSelector } from "./PokemonV2PokemonhabitatStddevFieldsModel.base"

/**
 * PokemonV2PokemonhabitatStddevFieldsModel
 *
 * aggregate stddev on columns
 */
export const PokemonV2PokemonhabitatStddevFieldsModel = PokemonV2PokemonhabitatStddevFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
