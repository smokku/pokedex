import { Instance } from "mobx-state-tree"
import { PokemonV2EncountermethodnameMaxFieldsModelBase } from "./PokemonV2EncountermethodnameMaxFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2EncountermethodnameMaxFieldsModel */
export interface PokemonV2EncountermethodnameMaxFieldsModelType extends Instance<typeof PokemonV2EncountermethodnameMaxFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2EncountermethodnameMaxFieldsModel */
export { selectFromPokemonV2EncountermethodnameMaxFields, pokemonV2EncountermethodnameMaxFieldsModelPrimitives, PokemonV2EncountermethodnameMaxFieldsModelSelector } from "./PokemonV2EncountermethodnameMaxFieldsModel.base"

/**
 * PokemonV2EncountermethodnameMaxFieldsModel
 *
 * aggregate max on columns
 */
export const PokemonV2EncountermethodnameMaxFieldsModel = PokemonV2EncountermethodnameMaxFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
