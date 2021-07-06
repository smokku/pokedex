import { Instance } from "mobx-state-tree"
import { PokemonV2PokemonspeciesMaxFieldsModelBase } from "./PokemonV2PokemonspeciesMaxFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PokemonspeciesMaxFieldsModel */
export interface PokemonV2PokemonspeciesMaxFieldsModelType extends Instance<typeof PokemonV2PokemonspeciesMaxFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokemonspeciesMaxFieldsModel */
export { selectFromPokemonV2PokemonspeciesMaxFields, pokemonV2PokemonspeciesMaxFieldsModelPrimitives, PokemonV2PokemonspeciesMaxFieldsModelSelector } from "./PokemonV2PokemonspeciesMaxFieldsModel.base"

/**
 * PokemonV2PokemonspeciesMaxFieldsModel
 *
 * aggregate max on columns
 */
export const PokemonV2PokemonspeciesMaxFieldsModel = PokemonV2PokemonspeciesMaxFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
