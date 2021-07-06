import { Instance } from "mobx-state-tree"
import { PokemonV2PokedexdescriptionMaxFieldsModelBase } from "./PokemonV2PokedexdescriptionMaxFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PokedexdescriptionMaxFieldsModel */
export interface PokemonV2PokedexdescriptionMaxFieldsModelType extends Instance<typeof PokemonV2PokedexdescriptionMaxFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokedexdescriptionMaxFieldsModel */
export { selectFromPokemonV2PokedexdescriptionMaxFields, pokemonV2PokedexdescriptionMaxFieldsModelPrimitives, PokemonV2PokedexdescriptionMaxFieldsModelSelector } from "./PokemonV2PokedexdescriptionMaxFieldsModel.base"

/**
 * PokemonV2PokedexdescriptionMaxFieldsModel
 *
 * aggregate max on columns
 */
export const PokemonV2PokedexdescriptionMaxFieldsModel = PokemonV2PokedexdescriptionMaxFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
