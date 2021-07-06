import { Instance } from "mobx-state-tree"
import { PokemonV2PokemondexnumberAvgFieldsModelBase } from "./PokemonV2PokemondexnumberAvgFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PokemondexnumberAvgFieldsModel */
export interface PokemonV2PokemondexnumberAvgFieldsModelType extends Instance<typeof PokemonV2PokemondexnumberAvgFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokemondexnumberAvgFieldsModel */
export { selectFromPokemonV2PokemondexnumberAvgFields, pokemonV2PokemondexnumberAvgFieldsModelPrimitives, PokemonV2PokemondexnumberAvgFieldsModelSelector } from "./PokemonV2PokemondexnumberAvgFieldsModel.base"

/**
 * PokemonV2PokemondexnumberAvgFieldsModel
 *
 * aggregate avg on columns
 */
export const PokemonV2PokemondexnumberAvgFieldsModel = PokemonV2PokemondexnumberAvgFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
