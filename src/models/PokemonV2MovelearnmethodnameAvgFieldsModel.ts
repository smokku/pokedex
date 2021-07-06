import { Instance } from "mobx-state-tree"
import { PokemonV2MovelearnmethodnameAvgFieldsModelBase } from "./PokemonV2MovelearnmethodnameAvgFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2MovelearnmethodnameAvgFieldsModel */
export interface PokemonV2MovelearnmethodnameAvgFieldsModelType extends Instance<typeof PokemonV2MovelearnmethodnameAvgFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2MovelearnmethodnameAvgFieldsModel */
export { selectFromPokemonV2MovelearnmethodnameAvgFields, pokemonV2MovelearnmethodnameAvgFieldsModelPrimitives, PokemonV2MovelearnmethodnameAvgFieldsModelSelector } from "./PokemonV2MovelearnmethodnameAvgFieldsModel.base"

/**
 * PokemonV2MovelearnmethodnameAvgFieldsModel
 *
 * aggregate avg on columns
 */
export const PokemonV2MovelearnmethodnameAvgFieldsModel = PokemonV2MovelearnmethodnameAvgFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
