import { Instance } from "mobx-state-tree"
import { PokemonV2PokemonspeciesMinFieldsModelBase } from "./PokemonV2PokemonspeciesMinFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PokemonspeciesMinFieldsModel */
export interface PokemonV2PokemonspeciesMinFieldsModelType extends Instance<typeof PokemonV2PokemonspeciesMinFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokemonspeciesMinFieldsModel */
export { selectFromPokemonV2PokemonspeciesMinFields, pokemonV2PokemonspeciesMinFieldsModelPrimitives, PokemonV2PokemonspeciesMinFieldsModelSelector } from "./PokemonV2PokemonspeciesMinFieldsModel.base"

/**
 * PokemonV2PokemonspeciesMinFieldsModel
 *
 * aggregate min on columns
 */
export const PokemonV2PokemonspeciesMinFieldsModel = PokemonV2PokemonspeciesMinFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
